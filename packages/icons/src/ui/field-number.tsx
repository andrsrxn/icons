import type { Icon } from './types'

export const IconFieldNumber: Icon = ({
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
      data-slot='icon-ui-field-number'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m5.06 11.04.44-.4c.72-.65 1.08-.97 1.38-.84s.3.61.3 1.58v2.94'
        stroke='currentColor'
      />
      <path
        d='M10.46 10.3c.38-.4.75-.73 1.53-.73 1.39 0 1.61 1.44.92 2.17-.35.36-1.05.87-1.68 1.39-.43.35-.65.53-.53.86s.42.33 1.03.33h1.56'
        stroke='currentColor'
      />
      <path
        d='M16.39 10c.4-.26.64-.43 1.31-.43 1.2 0 1.56 1.38.96 1.94-.6.55-1.49.43-1.49.43'
        stroke='currentColor'
      />
      <path
        d='M16.43 13.94c.4.24.6.38 1.27.38 1.2 0 1.56-1.37.96-1.93s-1.49-.43-1.49-.43'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.77 18.54c2.37 0 3.55 0 4.45-.49a4 4 0 0 0 1.6-1.6c.49-.9.49-2.08.49-4.45s0-3.55-.49-4.45a4 4 0 0 0-1.6-1.6c-.9-.49-2.08-.49-4.45-.49H8.23c-2.37 0-3.55 0-4.45.49a4 4 0 0 0-1.6 1.6c-.49.9-.49 2.08-.49 4.45s0 3.55.49 4.45a4 4 0 0 0 1.6 1.6c.9.49 2.08.49 4.45.49z'
        fill='currentColor'
      />
      <path
        d='M1.7 12c0-2.37 0-3.55.48-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49h7.54c2.37 0 3.55 0 4.45.49a4 4 0 0 1 1.6 1.6c.49.9.49 2.08.49 4.45v0c0 2.37 0 3.55-.49 4.45a4 4 0 0 1-1.6 1.6c-.9.49-2.08.49-4.45.49H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45'
        stroke='currentColor'
      />
    </svg>
  )
}
