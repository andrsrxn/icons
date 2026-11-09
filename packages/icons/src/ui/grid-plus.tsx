import type { Icon } from './types'

export const IconGridPlus: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 157 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-grid-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M103.02 33.53c3.77 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v1h-9v9h-1c-3.77 0-5.65 0-6.83-1.17s-1.17-3.05-1.17-6.83v-2c0-3.77 0-5.65 1.17-6.82 1.18-1.18 3.06-1.18 6.83-1.18z'
        fill='currentColor'
      />
      <path
        d='M102.02 51.78h-1.24c-3.77 0-5.65 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82v-2.49c0-3.77 0-5.65 1.17-6.82 1.18-1.18 3.06-1.18 6.83-1.18h2.48c3.77 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v1.24'
        stroke='currentColor'
      />
      <path d='M111.02 42.53h-18' stroke='currentColor' />
      <path d='M102.03 33.53v18.25' stroke='currentColor' />
      <path d='M105.21 48.92h6.35' stroke='currentColor' />
      <path d='M108.38 52.1v-6.35' stroke='currentColor' />
      <path
        opacity='.2'
        d='M13.24 2.76c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76z'
        fill='currentColor'
      />
      <path
        d='M2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24'
        stroke='currentColor'
      />
      <path d='M21 9.14H3' stroke='currentColor' />
      <path d='M21 15.1H3' stroke='currentColor' />
      <path d='M12 3v18.24' stroke='currentColor' />
      <path
        opacity='.2'
        d='M57.24 2.76c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.48c0-3.77 0-5.66 1.17-6.83S51 2.76 54.76 2.76z'
        fill='currentColor'
      />
      <path
        d='M46.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S51 2.76 54.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path d='M65 12H47' stroke='currentColor' />
      <path d='M56 3v18.24' stroke='currentColor' />
      <path
        opacity='.2'
        d='M145.48 2.9c3.77 0 5.65 0 6.83 1.18 1.17 1.17 1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.65-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17H143c-3.78 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V10.9c0-3.77 0-5.66 1.17-6.83S139.22 2.9 143 2.9z'
        fill='currentColor'
      />
      <path
        d='M135 13.39V10.9c0-3.77 0-5.66 1.17-6.83S139.22 2.9 143 2.9h2.48c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.65-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17H143c-3.78 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path d='M147.79 3.11v18.07' stroke='currentColor' />
      <path d='M135.2 8.6h18.07' stroke='currentColor' />
      <path d='M135.2 15.86h18.07' stroke='currentColor' />
      <path d='M140.68 3.11v18.07' stroke='currentColor' />
    </svg>
  )
}
