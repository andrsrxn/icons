import type { Icon } from './types'

export const IconPlusScan: Icon = ({
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
      data-slot='icon-ui-plus-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.49 21.49c3.3 0 4.95 0 5.97-1.03 1.03-1.02 1.03-2.67 1.03-5.97V9.5c0-3.3 0-4.95-1.03-5.97C19.44 2.5 17.8 2.5 14.5 2.5h-5c-3.3 0-4.95 0-5.97 1.03C2.5 4.56 2.5 6.2 2.5 9.5v4.98c0 3.3 0 4.95 1.03 5.97C4.56 21.5 6.2 21.5 9.5 21.5z'
        fill='currentColor'
      />
      <path
        d='M16 21.47c1.87 0 2.8 0 3.52-.34a3.5 3.5 0 0 0 1.64-1.63c.34-.72.34-1.66.34-3.53'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.56c1.84 0 2.76 0 3.47.33a3.5 3.5 0 0 1 1.67 1.67c.33.71.33 1.63.33 3.47'
        stroke='currentColor'
      />
      <path
        d='M8 21.47c-1.87 0-2.8 0-3.52-.34a3.5 3.5 0 0 1-1.64-1.63c-.34-.72-.34-1.66-.34-3.54'
        stroke='currentColor'
      />
      <path
        d='M8 2.56c-1.87 0-2.8 0-3.52.35a3.5 3.5 0 0 0-1.64 1.63c-.34.72-.34 1.66-.34 3.53'
        stroke='currentColor'
      />
      <path d='M7.3 12h9.4' stroke='currentColor' />
      <path d='M12 16.71V7.3' stroke='currentColor' />
    </svg>
  )
}
