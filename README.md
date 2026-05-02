# Code Snippets - Next.js 16 Learning Project

A learning project built with **Next.js 16** to explore modern full-stack development with the latest features and best practices.

## About

This is an educational project designed to practice and demonstrate:
- Next.js 16 app router and server/client components
- Full-stack development with TypeScript
- Database integration with Prisma ORM
- Modern React patterns and composition
- Performance optimization techniques

## Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org) with React 19
- **Language**: TypeScript
- **Database ORM**: [Prisma](https://www.prisma.io)
- **Database**: SQLite (local development)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js 20+ or 22+
- pnpm (or your preferred package manager)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Database Setup

Initialize the database with Prisma:
```bash
pnpm prisma migrate dev
```

View the database with Prisma Studio:
```bash
pnpm prisma studio
```

## Resources & Learning

- [Next.js Documentation](https://nextjs.org/docs) - Official documentation
- [Prisma Docs](https://www.prisma.io/docs) - Database ORM guide
- [React 19 Docs](https://react.dev) - Latest React features
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling framework
