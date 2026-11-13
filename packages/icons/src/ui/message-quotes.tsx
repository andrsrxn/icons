import type { Icon } from './types'

export const IconMessageQuotes: Icon = ({
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
      data-slot='icon-ui-message-quotes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.24.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1.88.15 2.44.37 4.16.37m-1.78-7.36-.11.16a1 1 0 0 1-1.7-.2l-.07-.18-.02-.04a1 1 0 0 0-.38-.47l-1.34-.9c-.43-.3-.64-.44-.76-.66s-.12-.48-.12-1v-.26c0-.52 0-.78.12-1s.33-.36.76-.65l.35-.24c.46-.32.7-.47.96-.5.27-.01.52.1 1.03.35l.54.26c.5.24.76.36.9.58.16.21.18.5.23 1.05l.2 2.26.02.27a1 1 0 0 1-.1.4l-.15.23zm7.1-5.15c-.52-.45-.77-.68-1.09-.72-.31-.03-.6.13-1.2.46l-.43.23c-.5.28-.76.42-.9.66-.14.23-.14.52-.14 1.1 0 .48 0 .72.1.93.1.2.3.35.67.65l1.42 1.1a1 1 0 0 1 .34.5l.02.04a1 1 0 0 0 1.61.43l.03-.03.37-.35q.15-.13.2-.2a1 1 0 0 0 .22-.5l.01-.28v-2.03c0-.44 0-.66-.09-.86s-.25-.34-.58-.63z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.23 12.06a9.8 9.8 0 0 1-9.8 9.8c-1.72 0-3.28-.22-4.16-.36h0a6 6 0 0 0-.8-.1c-.16 0-.32.03-.65.09-2.46.42-3.69.64-4.4.02a2 2 0 0 1-.36-.4c-.53-.78-.17-1.98.54-4.37l.08-.24h0c.15-.52.23-.78.25-.99v-.05c.01-.2-.05-.6-.16-1.38q-.13-.79-.14-2.02a9.8 9.8 0 1 1 19.6 0'
        stroke='currentColor'
      />
      <path
        d='M8.65 8.52a2.56 2.56 0 0 0-2.56 2.56c0 1.41.79 2.2 2.14 2.63.65.2.82.97.83 1.66.01.4.02.6.14.64s.25-.07.5-.31c1.52-1.41 1.54-3.02 1.54-4.18 0-.94-.3-1.77-.76-2.23a2.6 2.6 0 0 0-1.83-.77'
        stroke='currentColor'
      />
      <path
        d='M16.42 8.52a2.56 2.56 0 0 0-2.56 2.56c0 1.41.88 2.3 2.25 2.63.66.15.77.95.75 1.67-.01.38-.02.57.1.63.12.05.25-.07.51-.31 1.51-1.41 1.54-3.02 1.54-4.18 0-.94-.31-1.77-.76-2.23a2.6 2.6 0 0 0-1.83-.77'
        stroke='currentColor'
      />
    </svg>
  )
}
