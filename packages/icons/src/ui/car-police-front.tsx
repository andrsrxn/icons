import type { Icon } from './types'

export const IconCarPoliceFront: Icon = ({
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
      data-slot='icon-ui-car-police-front'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.35 14.33a7 7 0 0 0-.4-1.61 3 3 0 0 0-1.97-1.63c-.37-.1-.8-.1-1.65-.1H6.87c-.82 0-1.24 0-1.6.09a3 3 0 0 0-1.94 1.55c-.17.33-.26.73-.45 1.54a8 8 0 0 0-.36 2.3 3 3 0 0 0 2.02 2.54 8 8 0 0 0 2.33.16h10.46c1.2 0 1.8 0 2.26-.15a3 3 0 0 0 2.03-2.45 8 8 0 0 0-.27-2.24'
        fill='currentColor'
      />
      <path
        d='M12 19.17H6.62c-1.18 0-1.78 0-2.24-.15a3 3 0 0 1-2.03-2.43 8 8 0 0 1 .25-2.23c.15-.85.22-1.27.38-1.62a3 3 0 0 1 1.98-1.65c.37-.1.8-.1 1.66-.1h10.76c.86 0 1.3 0 1.66.1a3 3 0 0 1 1.98 1.65c.16.35.23.77.38 1.62.21 1.17.32 1.76.25 2.23a3 3 0 0 1-2.03 2.43c-.46.15-1.05.15-2.24.15z'
        stroke='currentColor'
      />
      <path
        d='m4.59 11 .15-.87c.44-2.35.65-3.52 1.49-4.21.83-.7 2.03-.7 4.41-.7h2.77c2.5 0 3.74 0 4.59.74s1 1.97 1.36 4.44l.08.6'
        stroke='currentColor'
      />
      <path
        d='M3.6 19.17c0 1 0 1.5.22 1.87q.18.3.48.47c.36.23.86.23 1.87.23h.08c1 0 1.5 0 1.87-.23q.3-.18.48-.47c.23-.36.23-.86.23-1.87'
        stroke='currentColor'
      />
      <path
        d='M15.09 19.17c0 1 0 1.5.23 1.87q.18.3.47.47c.37.23.87.23 1.87.23h.07c1 0 1.5 0 1.88-.23q.29-.18.47-.47c.23-.36.23-.86.23-1.87'
        stroke='currentColor'
      />
      <path d='m19.44 11 2.05-2.06' stroke='currentColor' />
      <path d='M15.64 15.08h2.06' stroke='currentColor' />
      <path d='M6.21 15.08h2.17' stroke='currentColor' />
      <path d='M4.59 11 2.52 8.92' stroke='currentColor' />
      <path d='M9.03 5.22a2.97 2.97 0 0 1 5.94 0' stroke='currentColor' />
      <path opacity='.2' d='M12 5.22h2.97a2.97 2.97 0 1 0-5.94 0z' fill='currentColor' />
    </svg>
  )
}
