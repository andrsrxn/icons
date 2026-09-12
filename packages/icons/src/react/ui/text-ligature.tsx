import type { Icon } from './types'

export const IconTextLigature: Icon = ({
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
      data-slot='icon-ui-text-ligature'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M13.73 20.46h3.46' stroke='currentColor' />
      <path d='M6.17 20.46H9.8' stroke='currentColor' />
      <path
        d='M15.48 20.46v-5.4c0-.94 0-1.42-.3-1.7-.29-.3-.76-.3-1.7-.3H5.54'
        stroke='currentColor'
      />
      <path d='M7.98 20.46V7.53a4.01 4.01 0 0 1 8.03 0' stroke='currentColor' />
    </svg>
  )
}
