import type { Icon } from './types'

export const IconBeer: Icon = ({
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
      data-slot='icon-ui-beer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.27 22.35c2.83 0 4.25 0 5.13-.88s.87-2.29.87-5.12V9.82a2.74 2.74 0 0 0-5.3-.95L11.9 9q-.24.64-.73 1.1l-.41.4c-.31.3-.47.44-.61.5a1 1 0 0 1-1.27-.34c-.09-.13-.15-.34-.27-.75L8.2 8.39a1.8 1.8 0 0 0-3.52.49v7.47c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M16.91 7.78v8.63c0 2.77 0 4.16-.84 5.03l-.07.07c-.87.84-2.26.84-5.03.84s-4.15 0-5.03-.84l-.06-.07c-.85-.87-.85-2.26-.85-5.03V7.78'
        stroke='currentColor'
      />
      <path d='M9.08 19.24v-4.96' stroke='currentColor' />
      <path d='M12.88 19.24v-6.2' stroke='currentColor' />
      <path d='M7.76 7.78h-4.2' stroke='currentColor' />
      <path d='M18.38 7.78h-5.75' stroke='currentColor' />
      <path
        d='M17.02 17.46h.84c1.3 0 1.95 0 2.42-.29a2 2 0 0 0 .68-.67c.29-.48.29-1.13.29-2.42 0-1.3 0-1.95-.3-2.43a2 2 0 0 0-.67-.67c-.47-.3-1.12-.3-2.42-.3h-.84'
        stroke='currentColor'
      />
      <path d='M8.6 4.2c0-1.39 1.07-2.5 2.38-2.5a2.45 2.45 0 0 1 2.38 2.5' stroke='currentColor' />
      <path
        d='M7.92 7.1c-.58 1.64.4 3.59 2.23 3.59C12 10.69 13.02 9 12.5 7.1'
        stroke='currentColor'
      />
      <path
        d='M4.72 8.33c.28.3.74.3 1.02 0a.8.8 0 0 0 0-1.1l-.51.55zm3.36-3.58c.29.3.75.3 1.03 0a.8.8 0 0 0 0-1.1l-.51.55zM5.23 7.78l.51-.55a1.83 1.83 0 0 1 .02-2.47l-.51-.54-.52-.55a3.44 3.44 0 0 0-.01 4.66zm.02-3.56.51.54a1.57 1.57 0 0 1 2.32-.01l.52-.55.5-.55a2.96 2.96 0 0 0-4.37.02z'
        fill='currentColor'
      />
      <path
        d='M17.23 8.33a.7.7 0 0 1-1.03 0 .8.8 0 0 1 0-1.1l.52.55zm-3.37-3.58a.7.7 0 0 1-1.02 0 .8.8 0 0 1 0-1.1l.51.55zm2.86 3.03-.52-.55c.63-.67.64-1.77-.01-2.47l.51-.54.51-.55a3.44 3.44 0 0 1 .02 4.66zm-.02-3.56-.51.54a1.57 1.57 0 0 0-2.33-.01l-.5-.55-.52-.55a2.96 2.96 0 0 1 4.37.02z'
        fill='currentColor'
      />
    </svg>
  )
}
