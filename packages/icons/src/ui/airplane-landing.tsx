import type { Icon } from './types'

export const IconAirplaneLanding: Icon = ({
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
      data-slot='icon-ui-airplane-landing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m4.15 12.46 12.26 3.28 2.35.63c1.58.43 2.37.64 2.99-.08.61-.73.35-1.3-.17-2.46a5.1 5.1 0 0 0-3.52-2.94l-.4-.12c-1.04-.33-1.56-.49-1.83-.76-.27-.28-.46-1-.85-2.42-.46-1.65-1.33-3.4-2.48-3.71l-1.14-.3c-.86-.24-1.29-.35-1.5-.13-.2.23-.04.66.28 1.5q.29.78.55 1.61c.27.94.41 1.4 0 1.82s-.94.28-2 0l-1.68-.45c-.44-.12-.66-.18-.83-.32s-.27-.35-.46-.77L5.1 5.51c-.12-.25-.18-.38-.27-.49a1 1 0 0 0-.25-.2c-.12-.08-.26-.11-.53-.19-.86-.23-1.29-.34-1.6-.22a1 1 0 0 0-.53.5c-.14.3-.06.74.11 1.6l.52 2.62.63 2.36c.13.47.5.84.97.97'
        fill='currentColor'
      />
      <path
        d='m6.9 13.2 9.51 2.54 3.66.99c.98.26 1.46.39 1.87 0 .4-.4.31-.8.13-1.6a6.2 6.2 0 0 0-3.73-4.37c-.23-.1-.7-.28-1.23-.46h0c-1.03-.37-1.54-.55-1.8-.83-.25-.28-.43-.98-.78-2.38a5.4 5.4 0 0 0-2.03-3.21 6 6 0 0 0-1.52-.75C10.2 2.91 9.81 2.8 9.6 3s-.09.68.14 1.63q.18.7.32 1.46c.2 1 .3 1.5-.08 1.89-.38.37-.95.25-2.1.02l-.69-.14c-.55-.1-.82-.15-1.01-.3s-.3-.38-.53-.87L5.1 5.5h0a2 2 0 0 0-.25-.46 1 1 0 0 0-.28-.22q-.13-.08-.5-.17c-.82-.22-1.24-.34-1.53-.23a1 1 0 0 0-.6.57c-.1.29-.01.7.17 1.54l.5 2.19h0c.38 1.73.57 2.59 1.15 3.2.58.6 1.44.83 3.15 1.28'
        stroke='currentColor'
      />
      <path d='M22 21H2.02' stroke='currentColor' />
    </svg>
  )
}
