export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--bg-rgb) / <alpha-value>)',
        panel: 'rgb(var(--panel-rgb) / <alpha-value>)',
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        mist: 'rgb(var(--muted-rgb) / <alpha-value>)',
        glow: 'rgb(var(--accent-rgb) / <alpha-value>)',
        paper: 'rgb(var(--text-rgb) / <alpha-value>)'
      },
      boxShadow: {
        forge: 'var(--shadow)'
      },
      fontFamily: {
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace']
      },
      animation: {
        'slow-spin': 'spin 18s linear infinite',
        'soft-float': 'softFloat 5s ease-in-out infinite',
        shimmer: 'shimmer 7s ease-in-out infinite'
      },
      keyframes: {
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        drift: {
          to: { transform: 'translate3d(24px, -30px, 0) scale(1.8)' }
        },
        lift: {
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55', transform: 'translate3d(0, 0, 0)' },
          '50%': { opacity: '0.9', transform: 'translate3d(18px, -16px, 0)' }
        }
      }
    }
  },
  plugins: []
};
