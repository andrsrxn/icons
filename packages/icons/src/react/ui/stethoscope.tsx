import type { Icon } from './types'

export const IconStethoscope: Icon = ({
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
      data-slot='icon-ui-stethoscope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='18.68' cy='11.8' r='2.89' fill='currentColor' />
      <path
        d='M4.96 2.56c-.3 0-.46 0-.59.02A2 2 0 0 0 2.65 4.3c-.02.12-.02.28-.02.58v3.43c0 1.89 0 2.83.58 3.42.6.58 1.53.58 3.42.58h1.5c1.9 0 2.83 0 3.42-.58.59-.59.59-1.53.59-3.42V4.53a2 2 0 0 0-1.97-1.97h-.08'
        stroke='currentColor'
      />
      <path d='M7.38 12.32v3.47a5.65 5.65 0 0 0 11.3 0v-.85' stroke='currentColor' />
      <circle cx='18.68' cy='11.8' r='2.89' stroke='currentColor' />
    </svg>
  )
}
