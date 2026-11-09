import type { Icon } from './types'

export const IconHexagon: Icon = ({
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
      data-slot='icon-ui-hexagon'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.2 3.57c1.86-1 2.79-1.51 3.8-1.51s1.94.5 3.8 1.5l.82.45.78.48c1.8 1.1 2.7 1.66 3.21 2.54s.54 1.93.6 4.05l.02.92-.03.92c-.05 2.12-.08 3.17-.59 4.05-.5.88-1.4 1.43-3.21 2.54l-.78.48-.82.44c-1.86 1-2.79 1.51-3.8 1.51s-1.94-.5-3.8-1.5l-.82-.45-.78-.48c-1.8-1.1-2.7-1.66-3.21-2.54s-.54-1.93-.6-4.05L2.78 12l.03-.92c.05-2.12.08-3.17.59-4.05.5-.88 1.4-1.43 3.21-2.54L7.38 4z'
        fill='currentColor'
      />
      <path
        d='m16.65 3.94-.7-.4C14.01 2.44 13.04 1.9 12 1.9s-2.02.54-3.94 1.64l-.71.4-.7.41c-1.92 1.12-2.87 1.69-3.4 2.6s-.53 2.02-.55 4.23v1.64c.02 2.21.02 3.32.55 4.23s1.48 1.48 3.4 2.6l.7.41.7.4c1.93 1.1 2.9 1.64 3.95 1.64s2.02-.54 3.94-1.64l.71-.4.7-.41c1.92-1.12 2.87-1.69 3.4-2.6s.53-2.02.55-4.23v-1.64c-.02-2.21-.02-3.32-.55-4.23s-1.48-1.48-3.4-2.6z'
        stroke='currentColor'
      />
    </svg>
  )
}
