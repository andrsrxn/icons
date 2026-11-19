import type { Icon } from './types'

export const IconBoxHeart: Icon = ({
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
      data-slot='icon-ui-box-heart'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.4 8.31v6.87a.5.5 0 0 1-.39.48l-2.25.54h-.23l-2.25-.53a.5.5 0 0 0-.57.27l-.87 1.87a.5.5 0 0 0 .02.47l.75 1.24a.5.5 0 0 1-.2.7l-3.46 1.81.44-9.6a.5.5 0 0 1 .27-.42l8-4.14a.5.5 0 0 1 .74.44'
        fill='currentColor'
      />
      <path
        d='M21.42 12.32v-2.15c0-1.7 0-2.54-.4-3.24s-1.14-1.12-2.6-1.96L15 2.99c-1.46-.84-2.2-1.26-3-1.26s-1.54.42-3 1.26L5.58 4.97c-1.46.84-2.2 1.27-2.6 1.96-.4.7-.4 1.54-.4 3.24v4.41c0 .96 0 1.44.13 1.87a3 3 0 0 0 .67 1.16c.3.33.72.57 1.56 1.05l5.48 3.16c.7.41 1.58-.1 1.58-.91'
        stroke='currentColor'
      />
      <path d='M3.12 7.53 12 12.42' stroke='currentColor' />
      <path d='M12 12.42v8.55' stroke='currentColor' />
      <path d='M7.3 9.57v4.61' stroke='currentColor' />
      <path d='M20.88 7.53 12 12.42' stroke='currentColor' />
      <path d='m7.3 9.57 9.14-5.42' stroke='currentColor' />
      <path
        d='M19.48 16.14c.32-.24.75-.42 1.25-.42 1.22 0 2.14 1.39 1.74 2.86-.34 1.26-2.09 2.32-3.17 3.25-.25.22-.38.33-.49.33s-.23-.1-.49-.33c-1.08-.93-2.83-2-3.17-3.25-.4-1.47.53-2.86 1.75-2.86.5 0 .92.18 1.25.42.38.27.57.4.66.4s.29-.13.67-.4'
        stroke='currentColor'
      />
    </svg>
  )
}
