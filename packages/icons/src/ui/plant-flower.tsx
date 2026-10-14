import type { Icon } from './types'

export const IconPlantFlower: Icon = ({
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
      data-slot='icon-ui-plant-flower'
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
        d='m6.42 9.67.77 2 2.47.49.85 1.6h3.12l.96-1.87 2.35-.23 1.13-2.29-1.13-1.65 1.02-1.4-1.02-2.3-2.49-.24L13.77 2l-3.27-.1-.85 1.9H7.19l-.77 2.3.86 1.77zm4.52-.52a1.75 1.75 0 1 0 2.48-2.48 1.75 1.75 0 0 0-2.48 2.48'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.92 21.2a5.8 5.8 0 0 0-4.9-4.17c-.36-.06-.54-.1-.73.04-.18.13-.2.3-.21.64-.06.9.03 2.44 1.08 3.54 1.07 1.13 2.95 1.08 4.05.92.4-.05.6-.08.73-.26s.08-.35-.02-.72'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.08 21.2a5.8 5.8 0 0 1 4.9-4.17c.36-.06.54-.1.73.04.18.13.2.3.22.64.05.9-.04 2.44-1.09 3.54-1.07 1.13-2.95 1.08-4.05.92-.4-.05-.6-.08-.73-.26s-.08-.35.02-.72'
        fill='currentColor'
      />
      <path d='M14.28 3.94a2.28 2.28 0 1 0-4.56 0' stroke='currentColor' />
      <path d='M14.2 11.7a2.2 2.2 0 1 1-4.4 0' stroke='currentColor' />
      <path d='M16.56 7.89a2.28 2.28 0 1 0-2.28-3.95' stroke='currentColor' />
      <path d='M16.56 7.89a2.28 2.28 0 0 1-2.28 3.94' stroke='currentColor' />
      <path d='M7.44 7.89a2.28 2.28 0 1 1 2.28-3.95' stroke='currentColor' />
      <path d='M7.44 7.89a2.28 2.28 0 0 0 2.28 3.94' stroke='currentColor' />
      <path
        d='M10.57 7.85A1.43 1.43 0 0 0 12 9.28a1.43 1.43 0 1 0-1.43-1.43'
        stroke='currentColor'
      />
      <path d='M12 19.87v-5.43' stroke='currentColor' />
      <path
        d='M11.92 21.2a5.8 5.8 0 0 0-4.9-4.17c-.36-.06-.54-.1-.73.04-.18.13-.2.3-.21.64-.06.9.03 2.44 1.08 3.54 1.07 1.13 2.95 1.08 4.05.92.4-.05.6-.08.73-.26s.08-.35-.02-.72'
        stroke='currentColor'
      />
      <path
        d='M12.08 21.2a5.8 5.8 0 0 1 4.9-4.17c.36-.06.54-.1.73.04.18.13.2.3.22.64.05.9-.04 2.44-1.09 3.54-1.07 1.13-2.95 1.08-4.05.92-.4-.05-.6-.08-.73-.26s-.08-.35.02-.72'
        stroke='currentColor'
      />
    </svg>
  )
}
