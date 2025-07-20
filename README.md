# UserFeedbackWall Backend

Backend API for the UserFeedbackWall fullstack test assignment. Built with Node.js, Express, TypeScript, and Prisma ORM.

## Features

- RESTful API (GET/POST /feedback)
- SQLite database with Prisma ORM
- Input validation & rate limiting
- TypeScript for type safety
- CORS enabled for frontend integration

## Prerequisites

- Node.js (v18+)
- npm
- Git

## Quick Start

```bash
# Clone & install
git clone <repository-url>
cd UserFeedbackWall-Backend
npm install

# Setup database
npx prisma generate
npx prisma migrate dev

# Start dev server
npm run dev
```

Create `.env` file:
```env
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=development
```

## Development

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start           # Start production server
npm run db:studio   # Open database GUI
```

Server runs on `http://localhost:3000`

## API

### Endpoints

```http
GET  /health                    # Health check
GET  /api/feedback             # Get all feedback
POST /api/feedback             # Create feedback
```

### Example Usage

```bash
# Get feedback
curl http://localhost:3000/api/feedback

# Create feedback
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "message": "Great app!"}'
```

### Response Format

```json
{
  "success": true,
  "data": [...],
  "message": "Success message"
}
```

## Project Structure

```
src/
├── controllers/     # Request handlers
├── middleware/      # Error handling, validation, rate limiting
├── routes/          # API routes
├── types/           # TypeScript types
├── utils/           # Database connection
└── index.ts         # Entry point
```

## Environment Variables

```env
DATABASE_URL="file:./dev.db"    # SQLite database path
PORT=3000                       # Server port
NODE_ENV=development            # Environment
```

## Security

- Input validation with Joi
- Rate limiting (10 req/15min per IP)
- CORS protection
- Helmet.js security headers

## Testing

```bash
# Health check
curl http://localhost:3000/health

# Test endpoints with Postman or Thunder Client
```

## Deployment

Deployed on VPS with ngrok (SQLite requires persistent storage).

```bash
# VPS setup
npm run build
npm start

# ngrok tunnel
ngrok http 3000
```

Alternative: Railway, Render, or Heroku with PostgreSQL.

## Assignment Requirements

✅ REST API (GET/POST /feedback)  
✅ SQLite database with Prisma ORM  
✅ Input validation & rate limiting  
✅ TypeScript & clean code structure  
✅ Production deployment  

---

**Backend for UserFeedbackWall fullstack test assignment** 