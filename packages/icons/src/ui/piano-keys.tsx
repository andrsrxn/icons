import type { Icon } from './types'

export const IconPianoKeys: Icon = ({
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
      data-slot='icon-ui-piano-keys'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.91 13.22c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h8.17c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.35c0-.52 0-.78-.03-1a3 3 0 0 0-2.53-2.53c-.22-.03-.48-.03-1-.03h-.33a1 1 0 0 0-.85.85v5.74c0 .56 0 .83-.12 1.05a1 1 0 0 1-.44.44c-.21.1-.49.1-1.04.1-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.44c-.1-.22-.1-.5-.1-1.05v-4.6c0-.93 0-1.4-.3-1.7s-.77-.3-1.7-.3h-.5c-.94 0-1.41 0-1.7.3s-.3.77-.3 1.7v4.62c0 .54 0 .8-.1 1.02a1 1 0 0 1-.46.46c-.2.1-.48.1-1.02.1s-.8 0-1.02-.1a1 1 0 0 1-.46-.46c-.1-.21-.1-.48-.1-1.02V5.68a1 1 0 0 0-.88-.88l-.26-.01c-.4 0-.6 0-.78.02a3 3 0 0 0-2.64 2.64c-.02.17-.02.37-.02.77z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M7.75 19.33h8.49c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-2.66c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.75c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.66c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88'
        stroke='currentColor'
      />
      <path d='M15.79 19.26v-6.13' stroke='currentColor' />
      <path d='M8.21 19.26v-6.13' stroke='currentColor' />
      <path
        d='M6.83 4.74v7c0 .37 0 .54.04.7a1 1 0 0 0 .66.65c.14.04.32.04.68.04s.54 0 .69-.04a1 1 0 0 0 .65-.66c.05-.14.05-.32.05-.68v-7'
        stroke='currentColor'
      />
      <path
        d='M14.45 4.74v7.06c0 .3 0 .46.04.6a1 1 0 0 0 .7.7c.13.03.29.03.6.03.3 0 .46 0 .6-.03a1 1 0 0 0 .7-.7c.03-.14.03-.3.03-.6V4.74'
        stroke='currentColor'
      />
    </svg>
  )
}
