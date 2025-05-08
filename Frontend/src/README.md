# Source Directory Structure

## Directory Organization

```
src/
├── app/                    # App Router pages and layouts (Next.js 13+)
├── components/             # React components
│   ├── common/            # Reusable UI components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   ├── hooks/             # Custom React hooks
│   └── providers/         # Context providers
├── lib/                   # Core business logic and utilities
│   ├── api/              # API client and endpoints
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── styles/                # Global styles and theme
├── config/                # App configuration
└── store/                # State management (if using Redux/Zustand)
```

## Key Points

1. `app/` - Contains all page components and layouts using the Next.js App Router
2. `components/` - All React components organized by purpose
3. `lib/` - Core business logic, API integration, and utilities
4. `styles/` - Global styles, CSS modules, and theming
5. `config/` - Configuration files and constants
6. `store/` - Global state management

## Migration Notes

1. Move business logic from `viewmodels/` to appropriate locations in `lib/`
2. Organize components into their respective categories
3. Keep utils focused on pure utility functions
4. Use the `lib/` directory for core business logic
