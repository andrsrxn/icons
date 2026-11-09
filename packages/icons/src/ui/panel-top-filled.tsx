import type { Icon } from './types'

export const IconPanelTopFilled: Icon = ({
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
      data-slot='icon-ui-panel-top-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M2.72 9.35c0-2.44 0-3.67.52-4.58a4 4 0 0 1 1.52-1.52c.91-.52 2.13-.52 4.58-.52h5.32c2.45 0 3.67 0 4.58.52a4 4 0 0 1 1.52 1.52c.52.91.52 2.14.52 4.58z'
        fill='currentColor'
      />
      <path
        d='M21.28 13.26v-2.53c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.06-1.18-6.83-1.18h-2.56c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.05-1.17 6.82v2.53c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.56c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83'
        stroke='currentColor'
      />
      <path d='M20.88 9.35H3.12' stroke='currentColor' />
    </svg>
  )
}
