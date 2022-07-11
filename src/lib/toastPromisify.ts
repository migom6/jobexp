import toast, {
  DefaultToastOptions,
  Renderable,
  ValueOrFunction,
  ValueFunction,
} from "react-hot-toast";

const isFunction = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>
): valOrFunction is ValueFunction<TValue, TArg> =>
  typeof valOrFunction === "function";

const resolveValue = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>,
  arg: TArg
): TValue => (isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction);

const toastPromisify = <T>(
  promise: Promise<T>,
  msgs: {
    loading: Renderable;
    success?: ValueOrFunction<Renderable, T>;
    error?: ValueOrFunction<Renderable, any>;
  },
  opts?: DefaultToastOptions
) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });

  promise
    .then((p) => {
      if (msgs.success)
        toast.success(resolveValue(msgs.success, p), {
          id,
          ...opts,
          ...opts?.success,
        });
      else toast.remove(id);
      return p;
    })
    .catch((e) => {
      if (msgs.error)
        toast.error(resolveValue(msgs.error, e), {
          id,
          ...opts,
          ...opts?.error,
        });
      else toast.remove(id);
    });

  return promise;
};

export default toastPromisify;
