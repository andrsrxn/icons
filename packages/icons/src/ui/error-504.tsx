import type { Icon } from './types'

export const IconError504: Icon = ({
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
      data-slot='icon-ui-error-504'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M6.33 7.77H2.4a.5.5 0 0 0-.5.44l-.27 2.51c-.05.42.44.74.84.62 1.7-.52 4.14-.21 4.14 2.17 0 3.4-4 3.28-5.1 1.48'
        stroke='currentColor'
      />
      <path
        d='M14.58 12.02c0 2.33-.61 4.22-2.72 4.22-2.1 0-2.71-1.9-2.71-4.22 0-2.33.7-4.22 2.71-4.22s2.72 1.89 2.72 4.22'
        stroke='currentColor'
      />
      <path
        d='M21.07 13.2V9.88c0-1.33 0-2-.35-2.1-.35-.12-.73.44-1.48 1.54l-1.57 2.32c-.46.69-.7 1.03-.55 1.3.14.26.55.26 1.38.26zm0 0v3.04m0-3.04h1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
