# STANDSIDE Web App

> **BUILT FROM LOYALTY • LIVE FOR THE GAME**

Full-stack e-commerce foundation for STANDSIDE, built with Next.js, React, TypeScript, Prisma, and PostgreSQL.

## Current Features

- Responsive STANDSIDE storefront
- Collection catalog
- Product detail pages
- Cart foundation
- Checkout foundation
- Customer account page
- Authentication foundation with role-based access
- Owner/Admin/Marketing/Designer dashboard foundation
- Product catalog API
- PostgreSQL order creation API
- Stock validation and transactional stock decrement
- Original product verification API
- Prisma database schema and seed foundation

## Product Catalog

| Product | Price |
|---|---:|
| STD T-SHIRT BUILT FROM LOYALTY | Rp110.000 |
| STD T-SHIRT BASEMENT DEPARTMENT | Rp110.000 |
| STD T-SHIRT TEAM FABRIC WAREHOUSE | Rp110.000 |
| STD JACKET HOLIGAN | Rp220.000 |
| STANDSIDE CAP | Rp65.000 |
| STANDSIDE BRACELET | Rp35.000 |
| STANDSIDE BANDANA | Rp50.000 |

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Prisma
- PostgreSQL
- Lucide React
- Tailwind CSS / STANDSIDE dark UI direction

## Routes

```text
/
/collection
/product/[slug]
/cart
/checkout
/account
/login
/verify
/dashboard
```

## API

```text
GET  /api/products
GET  /api/products?category=<slug>
POST /api/orders
POST /api/verify
```

### Create Order

`POST /api/orders` accepts the product IDs, quantities, shipping information, customer ID when available, and payment method. The server validates active products and stock, creates the order and order items, and decrements stock inside a Prisma transaction.

### Verify Product

`POST /api/verify` accepts a verification code, checks the database, returns `ORIGINAL` or `INVALID`, and records a verification log for valid codes.

## Environment Variables

Create `.env` locally from `.env.example`.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/STANDSIDE?schema=public"
AUTH_SECRET="replace-with-a-long-random-secret"
SEED_OWNER_PASSWORD=""
SEED_ADMIN_PASSWORD=""
SEED_MARKETING_PASSWORD=""
SEED_DESIGNER_PASSWORD=""
```

**Never commit `.env` or production secrets to GitHub.**

## Local Development

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Apply the database schema in development:

```bash
npx prisma db push
```

Seed development data when the seed environment variables are configured:

```bash
npx prisma db seed
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Notes

The project is still under active development. Checkout is currently being wired from the storefront to the PostgreSQL order API, and payment-gateway integration, production authentication hardening, complete CMS CRUD, inventory management UI, QR generation, and deployment automation remain part of the next implementation stages.

Do not treat the current checkout draft or dashboard UI as production-ready until the database, authentication, payment, validation, and deployment flows have been fully tested.

## Project Direction

```text
GitHub
  ↓
Next.js Web App
  ↓
Authentication + RBAC
  ↓
PostgreSQL / Prisma
  ↓
E-commerce + Verification
  ↓
Owner / Admin / Marketing / Designer Dashboard
  ↓
Cloudflare + Production Server
  ↓
standsideculture.id
```

## Repository

GitHub: https://github.com/standsideculture/STANDSIDE

## License

Private project — STANDSIDE. All brand assets, product designs, logos, and original content remain the property of their respective owner(s).
