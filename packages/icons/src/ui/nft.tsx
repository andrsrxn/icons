import type { Icon } from './types'

export const IconNft: Icon = ({
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
      data-slot='icon-ui-nft'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.2 3.57c1.86-1 2.79-1.51 3.8-1.51s1.94.5 3.8 1.5l.82.45.78.48c1.8 1.1 2.7 1.66 3.21 2.54s.54 1.93.6 4.05l.02.92-.02.62c-.05 1.77-.08 2.65-.65 2.9-.57.26-1.25-.3-2.62-1.42l-.1-.09c-.59-.48-.88-.72-1.23-.73-.35 0-.65.23-1.25.69l-.57.43c-.77.58-1.15.87-1.57.81s-.7-.46-1.26-1.25l-1.67-2.33c-.7-.97-1.05-1.46-1.54-1.48-.5-.02-.88.45-1.64 1.38l-1.24 1.52c-1.05 1.29-1.57 1.93-2.06 1.92a1 1 0 0 1-.57-.19c-.4-.29-.42-1.12-.47-2.78l.03-.92c.05-2.12.08-3.17.59-4.05.5-.88 1.4-1.43 3.21-2.54L7.38 4z'
        fill='currentColor'
      />
      <path
        d='m16.65 3.94-.7-.4C14.01 2.44 13.04 1.9 12 1.9s-2.02.54-3.94 1.64l-.71.4-.7.41c-1.92 1.12-2.87 1.69-3.4 2.6s-.53 2.02-.55 4.23v1.64c.02 2.21.02 3.32.55 4.23s1.48 1.48 3.4 2.6l.7.41.7.4c1.93 1.1 2.9 1.64 3.95 1.64s2.02-.54 3.94-1.64l.71-.4.7-.41c1.92-1.12 2.87-1.69 3.4-2.6s.53-2.02.55-4.23v-1.64c-.02-2.21-.02-3.32-.55-4.23s-1.48-1.48-3.4-2.6z'
        stroke='currentColor'
      />
      <path
        d='M16.85 8.78a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m3.12 16.73 4.08-5.26c.7-.9 1.04-1.34 1.51-1.33s.79.48 1.42 1.4l1.8 2.67c.56.81.84 1.22 1.27 1.26s1.11-.66 1.83-1.36c.58-.56 1.06-.99 1.43-1 .37 0 .67.27 1.27.8l3.15 2.82'
        stroke='currentColor'
      />
    </svg>
  )
}
