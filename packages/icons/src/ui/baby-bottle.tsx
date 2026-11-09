import type { Icon } from './types'

export const IconBabyBottle: Icon = ({
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
      data-slot='icon-ui-baby-bottle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m10.1 7 6.9 6.9-5.78 5.78c-1.24 1.24-1.86 1.86-2.58 2.07a3 3 0 0 1-1.74 0c-.72-.21-1.33-.83-2.57-2.07s-1.86-1.86-2.08-2.58a3 3 0 0 1 0-1.74c.22-.72.84-1.34 2.08-2.58z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m19.94 1.94.64.22a2 2 0 0 1 1.27 1.26l.21.65a2 2 0 0 1-.48 2.05l-.33.33q-.26.26-.6.37c-.49.17-.86.56-1 1.05l-.4 1.37a1 1 0 0 1-1.68.42L15.1 7.14a1.66 1.66 0 0 1 .88-2.79l.15-.03c.51-.1.93-.47 1.08-.97q.1-.33.35-.58l.34-.34a2 2 0 0 1 2.05-.49'
        fill='currentColor'
      />
      <path
        d='m17 13.9-5.78 5.78c-1.24 1.24-1.86 1.86-2.58 2.07a3 3 0 0 1-1.74 0c-.72-.21-1.33-.83-2.57-2.07s-1.86-1.86-2.08-2.58a3 3 0 0 1 0-1.74c.22-.72.84-1.34 2.08-2.58l5.77-5.77'
        stroke='currentColor'
      />
      <path
        d='M19.07 13.53q.21-.21.28-.3a1.5 1.5 0 0 0 0-1.85l-.28-.3-6.14-6.14-.3-.29a1.5 1.5 0 0 0-1.85 0l-.3.29v0c-.15.15-.23.22-.28.3a1.5 1.5 0 0 0 0 1.85c.05.07.13.14.28.3l6.14 6.14.3.28c.54.42 1.3.42 1.85 0z'
        stroke='currentColor'
      />
      <path
        d='m19.02 11.04.56-2.8c.08-.41.12-.62.22-.77.09-.15.57-.54 1.53-1.32h0q.1-.07.2-.18a2.48 2.48 0 1 0-3.68-3.3h0a13 13 0 0 1-1.32 1.54c-.15.1-.35.13-.76.21l-2.8.56'
        stroke='currentColor'
      />
      <path d='M10.24 13.32 9.13 12.2' stroke='currentColor' />
      <path d='m7.47 16.09-1.11-1.12' stroke='currentColor' />
    </svg>
  )
}
