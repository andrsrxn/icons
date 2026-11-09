import type { Icon } from './types'

export const IconFilter: Icon = ({
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
      data-slot='icon-ui-filter'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.62 11.22 2.87 7.46l-.18-.18a3 3 0 0 1-.8-1.9v-.26c0-.3 0-.44.02-.57a3 3 0 0 1 2.74-2.74h14.77a3 3 0 0 1 2.75 2.74v.82a3 3 0 0 1-.97 2.1l-3.75 3.75c-.87.87-1.3 1.3-1.53 1.85s-.23 1.16-.23 2.4v.67c0 .93 0 1.4-.13 1.82a3 3 0 0 1-.35.76c-.24.37-.6.67-1.3 1.27-1.91 1.6-2.86 2.4-3.67 2.35a2 2 0 0 1-1.3-.6c-.56-.58-.56-1.83-.56-4.32v-1.96c0-1.23 0-1.84-.23-2.39s-.66-.98-1.53-1.85'
        fill='currentColor'
      />
      <path
        d='m2.87 7.46 3.75 3.76h0c.87.87 1.3 1.3 1.53 1.85s.23 1.16.23 2.4v1.95c0 2.5 0 3.74.56 4.32a2 2 0 0 0 1.3.6c.8.06 1.76-.74 3.66-2.35.71-.6 1.07-.9 1.31-1.27a3 3 0 0 0 .35-.76c.13-.43.13-.9.13-1.82v-.68c0-1.23 0-1.84.23-2.39s.66-.98 1.53-1.85l3.75-3.76.18-.18a3 3 0 0 0 .8-1.9v-.26l-.01-.57a3 3 0 0 0-2.75-2.74H4.65A3 3 0 0 0 1.9 4.55l-.01.57v.25a3 3 0 0 0 .97 2.1'
        stroke='currentColor'
      />
    </svg>
  )
}
