## Overview

JobExp : Assignment given by Glints

https://jobexp.vercel.app

👉[Please checkout this article to know more about the features and approach.](https://www.notion.so/migom6/Job-Experiences-34dc9f9d1be343c58cf054f5bab11ed9)

## Installation

To install dependency

```bash
npm i
```

Update the `DATABASE_URL` in `.env` file to your own postgres connection url. (current one is fake)

```bash
cp .env.example .env
```

Execute the initial DB migrations

```bash
npm run db:sync
```

`This will also seed with some values.`

To run development server

```bash
npm run dev
```

To run production server

```bash
npm run build
npm run start
```
