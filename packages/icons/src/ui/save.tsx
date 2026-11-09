import type { Icon } from './types'

export const IconSave: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-save'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.93 20.95c-1.12 0-1.69 0-2.14-.15a3 3 0 0 1-1.92-1.91c-.15-.46-.15-1.02-.15-2.15V5.71a2.8 2.8 0 0 1 2.8-2.8c.47 0 .87.34.93.8l.23 1.56c.12.81.18 1.22.46 1.46s.7.24 1.52.24h2.68c.86 0 1.3 0 1.58-.25.28-.26.33-.69.41-1.54l.28-2.72L17.77 5l.25.17.2.21 2.55 2.88c.25.29.38.43.44.6.07.17.07.36.07.73v7.21c0 1.07 0 1.6-.14 2.04a3 3 0 0 1-1.97 1.98c-.44.13-.97.13-2.04.13l-.19-4.85c-.03-.81-.04-1.22-.3-1.5-.24-.26-.65-.31-1.46-.4l-3-.36-.37-.01-2.75.18c-.84.06-1.27.08-1.53.36-.27.27-.3.69-.33 1.53z'
        fill='currentColor'
      />
      <path
        d='m17.86 5.35-1.17-.95c-1.1-.89-1.64-1.33-2.3-1.57-.64-.23-1.35-.23-2.76-.23h-.86c-3.77 0-5.65 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v2.78c0 3.77 0 5.65 1.17 6.83 1.18 1.17 3.06 1.17 6.83 1.17h2.46c3.77 0 5.65 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-1.49c0-1.9 0-2.84-.4-3.66s-1.14-1.42-2.62-2.6z'
        stroke='currentColor'
      />
      <path
        d='M13.59 2.82v.78c0 1.42 0 2.13-.34 2.64a2 2 0 0 1-.54.54c-.5.34-1.22.34-2.64.34s-2.12 0-2.63-.34a2 2 0 0 1-.54-.54c-.34-.5-.34-1.22-.34-2.64v-.78'
        stroke='currentColor'
      />
      <path
        d='M6.99 21.26v-3.29c0-1.89 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59H13c1.89 0 2.83 0 3.42.59.58.58.58 1.52.58 3.41v3.29'
        stroke='currentColor'
      />
    </svg>
  )
}
