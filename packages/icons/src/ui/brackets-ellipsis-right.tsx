import type { Icon } from './types'

export const IconBracketsEllipsisRight: Icon = ({
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
      data-slot='icon-ui-brackets-ellipsis-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.76 21.3c.7 0 1.05 0 1.33-.08a2 2 0 0 0 1.34-1.33c.08-.29.08-.64.08-1.33v-4c0-.81.55-1.52 1.34-1.73.88-.23.86-1.48-.01-1.74a1.8 1.8 0 0 1-1.33-1.74V5.44c0-.7 0-1.04-.08-1.33a2 2 0 0 0-1.34-1.33c-.28-.09-.63-.09-1.33-.09'
        stroke='currentColor'
      />
      <path
        d='M7.65 11.59a.41.41 0 1 1 0 .82.41.41 0 0 1 0-.82'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 11.59a.41.41 0 1 1 0 .82.41.41 0 0 1 0-.82'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.35 11.59a.41.41 0 1 1 0 .82.41.41 0 0 1 0-.82'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
