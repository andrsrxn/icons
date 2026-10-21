import type { Icon } from './types'

export const IconBracketsX: Icon = ({
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
      data-slot='icon-ui-brackets-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.86 21.3c-.7 0-1.04 0-1.33-.08A2 2 0 0 1 5.2 19.9c-.09-.29-.09-.64-.09-1.33v-4a1.8 1.8 0 0 0-1.33-1.73c-.88-.23-.87-1.48 0-1.74a1.8 1.8 0 0 0 1.33-1.74V5.44c0-.7 0-1.04.09-1.33a2 2 0 0 1 1.33-1.33c.29-.09.63-.09 1.33-.09'
        stroke='currentColor'
      />
      <path
        d='m18.89 13.18 1.3-.34c.88-.23.9-1.5.01-1.75a1.8 1.8 0 0 1-1.31-1.74V5.44c0-.7 0-1.04-.09-1.33a2 2 0 0 0-1.33-1.33c-.29-.09-.63-.09-1.33-.09'
        stroke='currentColor'
      />
      <path d='m15.65 21.56 5-5' stroke='currentColor' />
      <path d='m20.65 21.56-5-5' stroke='currentColor' />
    </svg>
  )
}
