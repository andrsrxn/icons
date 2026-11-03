import type { Icon } from './types'

export const IconPipelinePlus: Icon = ({
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
      data-slot='icon-ui-pipeline-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M13.06 5.77H2.46' stroke='currentColor' />
      <path d='M18.2 12H5.8' stroke='currentColor' />
      <path d='M15.11 18.23H8.9' stroke='currentColor' />
      <path d='M16.53 5.76h5.6' stroke='currentColor' />
      <path d='M19.33 8.57v-5.6' stroke='currentColor' />
    </svg>
  )
}
