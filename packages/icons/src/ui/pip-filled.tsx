import type { Icon } from './types'

export const IconPipFilled: Icon = ({
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
      data-slot='icon-ui-pip-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.71 8c0-1.89 0-2.83.59-3.41S3.83 4 5.71 4H18.3c1.88 0 2.82 0 3.41.59.59.58.59 1.52.59 3.41v.94c0 1.88 0 2.83-.59 3.41s-1.53.59-3.41.59h-1.81c-1.44 0-2.15 0-2.66.35a2 2 0 0 0-.52.52c-.35.5-.35 1.23-.35 2.66s0 2.15-.35 2.66a2 2 0 0 1-.52.52c-.51.35-1.23.35-2.66.35h-3.7c-1.9 0-2.83 0-3.42-.59-.59-.58-.59-1.52-.59-3.41z'
        fill='currentColor'
      />
      <rect x='1.71' y='4' width='20.57' height='16' rx='3' stroke='currentColor' />
      <path
        d='M22.29 14.85c0-.36 0-.54-.03-.69a2 2 0 0 0-1.67-1.67c-.15-.02-.33-.02-.7-.02h-3.52c-1.66 0-2.5 0-3.05.46l-.26.26c-.46.55-.46 1.38-.46 3.04s0 2.5.46 3.05l.26.26c.56.46 1.39.46 3.05.46h.68'
        stroke='currentColor'
      />
    </svg>
  )
}
