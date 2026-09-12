import type { Icon } from './types'

export const IconLabel: Icon = ({
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
      data-slot='icon-ui-label'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.46 10.37c-.94-2.46-1.41-3.7-.82-4.56.6-.87 1.92-.87 4.56-.87h7.76c1.64 0 2.46 0 3.14.38.68.39 1.11 1.09 1.97 2.48l.65 1.06c.94 1.53 1.4 2.3 1.4 3.14s-.46 1.61-1.4 3.14l-.65 1.06c-.86 1.4-1.29 2.1-1.97 2.48s-1.5.38-3.14.38H7.25c-2.66 0-4 0-4.59-.88-.6-.87-.1-2.1.86-4.58l.03-.08c.28-.71.42-1.07.42-1.44s-.13-.73-.4-1.45z'
        fill='currentColor'
      />
      <path
        d='M3.54 10.15c-1.34-2.27-2.01-3.4-1.68-4.3a2 2 0 0 1 .32-.55c.6-.74 1.91-.74 4.54-.74h7.95c1.5 0 2.24 0 2.87.32.64.32 1.08.92 1.97 2.12l1.06 1.44c1.25 1.72 1.88 2.57 1.88 3.56 0 .98-.62 1.84-1.88 3.55L19.5 17c-.89 1.2-1.33 1.8-1.97 2.12s-1.38.32-2.87.32H6.68c-2.58 0-3.87 0-4.47-.72a2 2 0 0 1-.34-.61c-.32-.89.35-2 1.67-4.2.5-.83.74-1.25.78-1.7v-.36c-.04-.45-.28-.87-.78-1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
