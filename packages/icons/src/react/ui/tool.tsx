import type { Icon } from './types'

export const IconTool: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-tool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.36 4.45c2.59-2.58 5.23-2.2 6.67-1.67.6.22.68.94.23 1.38l-2.47 2.45a1 1 0 0 0 0 1.42l1.23 1.23a1 1 0 0 0 1.41 0l2.45-2.43c.45-.45 1.19-.35 1.4.26a6.2 6.2 0 0 1-1.66 6.62c-1.48 1.48-4.4 1.54-5.52 1.5-.3-.01-.6.1-.8.3l-5.02 5.02a3 3 0 0 1-4.24 0l-.56-.56a3 3 0 0 1 0-4.24L8.5 10.7c.2-.2.31-.5.3-.79-.02-1.11.08-3.98 1.56-5.47'
        fill='currentColor'
      />
      <path
        d='M10.93 3.86a5.6 5.6 0 0 1 4.7-1.36c1 .15 1.51.22 1.7.8.2.6-.23 1.02-1.08 1.86l-.84.84c-.58.58-.87.86-.9 1.22v.2c.03.36.32.65.9 1.23.57.57.86.86 1.21.9h.2c.36-.04.65-.32 1.23-.9l.93-.93c.82-.81 1.23-1.22 1.8-1.04s.67.66.85 1.62a5 5 0 0 1-1.33 4.62c-1.3 1.28-3.67 1.43-5.01 1.4a3 3 0 0 0-1.01.05c-.2.08-.36.25-.7.6L8.53 20.2c-.22.24-.33.35-.44.44a3 3 0 0 1-3.88.03l-.44-.43-.43-.44a3 3 0 0 1 .02-3.87c.1-.1.2-.22.44-.44l5.13-5c.36-.35.54-.53.62-.73s.06-.48.03-1.05c-.07-1.35.02-3.65 1.36-4.85'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.81 18.02a.54.54 0 1 1-.76-.76.54.54 0 0 1 .76.76'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
