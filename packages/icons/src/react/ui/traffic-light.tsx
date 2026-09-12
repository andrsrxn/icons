import type { Icon } from './types'

export const IconTrafficLight: Icon = ({
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
      data-slot='icon-ui-traffic-light'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.74 6.53c0-1.88 0-2.82-.58-3.41-.59-.59-1.53-.59-3.42-.59h-1.48c-1.89 0-2.83 0-3.42.59s-.58 1.53-.58 3.41v6.65c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h1.48c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42zm-3.27.2a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0m0 6.28a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0'
        fill='currentColor'
      />
      <path
        d='M7.3 6.27c-.24-2.08-.36-3.12.24-3.8.6-.66 1.64-.66 3.74-.66h1.5c2.07 0 3.1 0 3.7.66s.49 1.69.28 3.75l-.34 3.23-.03.4.03.42.34 3.23c.21 2.06.32 3.1-.28 3.75-.6.66-1.63.66-3.7.66h-1.5c-2.1 0-3.14 0-3.74-.67s-.48-1.7-.23-3.8l.36-3.12c.03-.23.04-.34.04-.46s-.01-.23-.04-.46z'
        stroke='currentColor'
      />
      <path d='M12 22.55V17.9' stroke='currentColor' />
      <circle cx='12' cy='6.74' r='1.47' stroke='currentColor' />
      <circle cx='12' cy='13.01' r='1.47' stroke='currentColor' />
      <path
        d='M7.1 5.01c-1.68 0-2.51 0-2.81.42a1 1 0 0 0-.18.44c-.07.51.53 1.09 1.74 2.24l1.38 1.32'
        stroke='currentColor'
      />
      <path
        d='M17.02 5.01c1.57 0 2.36 0 2.66.38a1 1 0 0 1 .21.54c.05.47-.52 1.02-1.66 2.1l-1.46 1.4'
        stroke='currentColor'
      />
      <path
        d='M6.85 11.96c-1.43 0-2.15 0-2.45.32a1 1 0 0 0-.27.68c0 .43.52.93 1.57 1.9l1.15 1.1'
        stroke='currentColor'
      />
      <path
        d='M17.15 11.96c1.43 0 2.15 0 2.45.32a1 1 0 0 1 .27.68c0 .43-.52.93-1.57 1.9l-1.15 1.1'
        stroke='currentColor'
      />
    </svg>
  )
}
