import type { Icon } from './types'

export const IconUserCheck: Icon = ({
  size = 24,
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
      data-slot='user-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path
          d='M12 13.07a7.6 7.6 0 0 0-7.41 6.48c-.07.55.38 1 .93 1h10.95a1 1 0 0 0 .84-.46l1.29-2a1 1 0 0 0 .06-.93 7.6 7.6 0 0 0-6.66-4.1'
          fill='currentColor'
        />
        <path d='M16.8 8.26a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0' fill='currentColor' />
      </g>
      <path
        d='M15.15 17.9a.75.75 0 1 0-1.25.83l.62-.41zm-.3.9.62-.4zm3.34-.01-.63-.4zm2.86-3.03a.75.75 0 1 0-1.26-.82l.63.41zm-4.52 4.77v-.75zm-12.76.02a.75.75 0 0 0 1.5 0zm10.5-6.32a.75.75 0 0 0 .51-1.4l-.26.7zm2.54-5.97h-.75A4.06 4.06 0 0 1 12 12.32v1.5a5.56 5.56 0 0 0 5.56-5.56zM12 13.06v-.74a4.06 4.06 0 0 1-4.06-4.06h-1.5A5.56 5.56 0 0 0 12 13.82zm-4.8-4.8h.74A4.06 4.06 0 0 1 12 4.2V2.7a5.56 5.56 0 0 0-5.56 5.56zm4.8-4.8v.74a4.06 4.06 0 0 1 4.06 4.06h1.5A5.56 5.56 0 0 0 12 2.7zm2.52 14.86-.62.41.32.49.63-.41.62-.42-.32-.48zm3.67.47.63.4 2.23-3.43-.63-.4-.63-.42-2.23 3.44zm-3.34.02-.63.41c.37.55.69 1.04 1 1.38.3.35.72.68 1.31.68v-1.5h-.01l-.2-.18c-.2-.24-.45-.61-.85-1.2zm3.34-.02-.63-.4c-.39.6-.63.97-.84 1.2l-.2.18v.76l.01.75c.59 0 1-.34 1.31-.7.3-.33.62-.83.98-1.38zM4.52 20.55h.75A6.8 6.8 0 0 1 12 13.82v-1.5a8.3 8.3 0 0 0-8.23 8.23zM12 13.07v.75q1.17 0 2.26.4l.26-.7.26-.7a8 8 0 0 0-2.78-.5z'
        fill='currentColor'
      />
    </svg>
  )
}
