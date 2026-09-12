import type { Icon } from './types'

export const IconSignIn: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-sign-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.18 7.47c0-1.53 0-2.3.43-2.84.44-.55 1.19-.72 2.68-1.06l2.82-.65c2.25-.52 3.38-.77 4.14-.17S19 4.5 19 6.82v10.62c0 2.21 0 3.31-.71 3.91-.72.6-1.8.41-3.97.04l-2.83-.5c-1.58-.27-2.37-.4-2.84-.97-.47-.55-.47-1.36-.47-2.97z'
        fill='currentColor'
      />
      <path
        d='m12.05 8.59.58.58c1.34 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.58.58'
        stroke='currentColor'
      />
      <path d='M3.82 12h10.34' stroke='currentColor' />
      <path
        d='M8.18 6.35V6.2a3 3 0 0 1 2.4-2.87l.15-.03 1.9-.34c2.6-.48 3.92-.71 4.87-.16q.46.26.79.65c.71.84.71 2.17.71 4.83v7.74c0 2.55 0 3.82-.68 4.65a3 3 0 0 1-.75.66c-.9.56-2.17.39-4.7.05l-1.7-.23-.7-.1a3 3 0 0 1-2.27-2.6c-.02-.16-.02-.34-.02-.7'
        stroke='currentColor'
      />
    </svg>
  )
}
