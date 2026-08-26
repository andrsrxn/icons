import type { Icon } from './types'

export const IconLikeDislike: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-like-dislike'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.93'
        y='13.5'
        width='6.72'
        height='3.31'
        rx='1'
        transform='rotate(-90 2.93 13.5)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='21.32'
        y='10.58'
        width='6.72'
        height='3.31'
        rx='1'
        transform='rotate(90 21.32 10.58)'
        fill='currentColor'
      />
      <path
        d='M10.06 13.6H6.3c-1.4 0-2.12 0-2.62-.34a2 2 0 0 1-.54-.54c-.35-.5-.35-1.22-.35-2.64 0-1.4 0-2.1.34-2.6a2 2 0 0 1 .56-.56c.5-.33 1.2-.33 2.6-.33 0 0 .75-1.18.97-2l.1-.4c.18-.97.28-1.45.67-1.68.4-.23.66-.13 1.2.05.34.11.64.3.82.61.3.53.34 1.28.26 1.97h0c-.06.56-.09.84-.06.97.07.44.29.68.71.8.14.04.36.04.81.04.88 0 1.32 0 1.63.1a2 2 0 0 1 1.36 2.08c-.03.32-.2.72-.56 1.53l-.15.34c-.34.77-.5 1.16-.75 1.47a3 3 0 0 1-1.58 1.03c-.38.1-.8.1-1.65.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.6 10.48h3.35c1.42 0 2.12 0 2.63.34a2 2 0 0 1 .54.54c.34.51.34 1.22.34 2.64 0 1.4 0 2.1-.33 2.6a2 2 0 0 1-.56.57c-.5.33-1.2.33-2.6.33 0 0-.75 1.17-.98 2l-.1.4c-.18.96-.27 1.44-.66 1.67-.4.23-.66.14-1.2-.04-.34-.12-.65-.3-.83-.62a3.4 3.4 0 0 1-.25-1.97c.05-.56.08-.84.06-.97q-.09-.64-.72-.8c-.13-.03-.35-.03-.8-.03h-.42c-.5 0-.76 0-.95-.04a2 2 0 0 1-1.58-2.41 6 6 0 0 1 .35-.88M6.24 6.68v6.92M18 17.4v-6.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
