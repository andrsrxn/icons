import type { Icon } from './types'

export const IconHeartBreak: Icon = ({
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
      data-slot='heart-break'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.87 4.96c1.25 0 2.3.61 3.06 1.29.59.52.88.78 1.07.78s-1.49 2.4-.49 3.72c1.6 2.45-1.71 2.93-.58 4.23l1.37 1.36q.19.18.23.28t.06.35l.14 1.72c.02.25.03.37-.03.5-.05.11-.14.18-.32.3q-.24.18-.38.2c-.19 0-.38-.17-.77-.5-2.89-2.56-7.5-4.62-7.5-9.91 0-1.87 1.54-4.32 4.14-4.32'
        fill='currentColor'
      />
      <path
        d='m12 19.92.38-2.38c.07-.49.11-.73.04-.96l-.01-.03c-.08-.23-.26-.4-.62-.74l-.1-.1c-.51-.47-.76-.71-.83-1.02l-.02-.28c.02-.31.24-.58.68-1.13l.07-.09c.36-.45.54-.68.59-.94a1 1 0 0 0-.03-.46c-.08-.24-.29-.45-.7-.85-.38-.37-.56-.55-.64-.77a1 1 0 0 1-.05-.42c.02-.23.15-.45.42-.9L12 7.5c.51-.84 2.05-2.54 4.13-2.54 2.6 0 4.13 2.45 4.13 4.32 0 5.79-5.5 7.71-8.26 10.64-2.75-2.93-8.26-4.85-8.26-10.64 0-1.87 1.53-4.32 4.13-4.32 2.08 0 3.62 1.7 4.13 2.54'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
