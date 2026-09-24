import type { Icon } from './types'

export const IconHousePlug: Icon = ({
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
      data-slot='icon-ui-house-plug'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.67 21.74h-.28l-.27-.08-3.4-.97c-.73-.2-1.09-.31-1.3-.59s-.18-.65-.16-1.4l.33-8.98c.01-.44.02-.66.12-.85.1-.2.26-.34.6-.62l6.45-5.31c.6-.5.91-.76 1.27-.76s.67.25 1.28.76l6.44 5.31c.34.28.51.42.6.62.1.2.11.41.12.86l.3 8.95c.02.76.03 1.14-.17 1.42s-.57.38-1.3.58l-3.62.99-.26.06-.27.01zm2.79-4.42.28.03.27-.02 2.45-.33c.64-.08.97-.12 1.2-.33.23-.2.3-.52.47-1.15l.2-.73c.27-1.07.4-1.6.13-1.98-.26-.38-.81-.43-1.91-.52l-2.33-.19h-.32l-2.5.2c-1.12.09-1.68.13-1.96.52-.27.38-.12.92.18 2l.21.76c.17.6.26.9.48 1.1s.53.25 1.15.34z'
        fill='currentColor'
      />
      <path
        d='M8.66 21.64c-2.3 0-3.45 0-4.25-.6a3 3 0 0 1-.6-.6c-.6-.8-.6-1.95-.6-4.25v-4.24c0-1.3 0-1.93.25-2.5s.72-1.02 1.66-1.9l2.8-2.6c1.93-1.8 2.9-2.7 4.08-2.7s2.15.9 4.08 2.7l2.8 2.6c.94.88 1.41 1.32 1.66 1.9s.25 1.2.25 2.5v5.3c0 1.3 0 1.95-.2 2.46a3 3 0 0 1-1.73 1.73c-.52.2-1.17.2-2.46.2h-.18c-1.14 0-1.7 0-2.16-.15a3 3 0 0 1-1.9-1.9c-.16-.46-.16-1.03-.16-2.17'
        stroke='currentColor'
      />
      <path
        d='M7.42 15.4c-.4-1.26-.6-1.9-.41-2.38q.14-.38.47-.65c.4-.32 1.07-.32 2.4-.32h4.27c1.32 0 1.98 0 2.38.32q.33.27.48.64c.18.49-.01 1.12-.4 2.37-.23.72-.34 1.08-.58 1.34a2 2 0 0 1-.43.32c-.31.15-.7.15-1.45.15H9.87c-.75 0-1.12 0-1.43-.15a2 2 0 0 1-.44-.32c-.23-.25-.35-.6-.58-1.32'
        stroke='currentColor'
      />
      <path d='M9.58 12.05V8.97' stroke='currentColor' />
      <path d='M14.42 12.05V8.97' stroke='currentColor' />
    </svg>
  )
}
