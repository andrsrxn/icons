import type { Icon } from './types'

export const IconPanelRightOpen: Icon = ({
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
      data-slot='icon-ui-panel-right-open'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m7.2 15.9 1.08-1.07h0c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83L7.2 8.1'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.65 21.18c2.44 0 3.67 0 4.58-.52a4 4 0 0 0 1.52-1.52c.52-.91.52-2.13.52-4.58V9.44c0-2.45 0-3.67-.52-4.58a4 4 0 0 0-1.52-1.52c-.91-.52-2.14-.52-4.58-.52z'
        fill='currentColor'
      />
      <path
        d='M10.74 2.82h2.53c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v2.36c0 3.77 0 5.66-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17h-2.53c-3.78 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.36c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17'
        stroke='currentColor'
      />
      <path d='M14.65 2.82v18.36' stroke='currentColor' />
    </svg>
  )
}
