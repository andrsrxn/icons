import type { FlagIcon } from './types'

export const IconFlagLB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'LB'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-lb'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='lb-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lb-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f03340' />
          <stop offset='100%' stopColor='#eb212e' />
        </linearGradient>
        <linearGradient id='lb-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1fc065' />
          <stop offset='100%' stopColor='#17a555' />
        </linearGradient>
        <clipPath id='lb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lb-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lb-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lb-b)' d='M0 0h21v4H0z' />
          <path fill='url(#lb-b)' d='M0 11h21v4H0z' />
          <path fill='url(#lb-a)' d='M0 4h21v7H0z' />
          <path
            fill='url(#lb-c)'
            d='M9.65 9.35a.497.497 0 0 0-.003-.703l.206.206a.97.97 0 0 0-.837-.232l-1.032.258c-.267.067-.3-.017-.08-.183l1.191-.892c.224-.168.184-.304-.103-.304h-.484c-.28 0-.309-.1-.064-.222l1.112-.556c.245-.123.223-.222-.064-.222h-.484c-.28 0-.323-.138-.103-.304l1.19-.892a.72.72 0 0 1 .81 0l1.19.892c.224.168.184.304-.103.304h-.484c-.28 0-.309.1-.064.222l1.112.556c.245.123.223.222-.064.222h-.484c-.28 0-.323.138-.103.304l1.19.892c.224.168.191.25-.08.183l-1.03-.258a.98.98 0 0 0-.838.232l.206-.206a.496.496 0 0 0-.003.703l.3.3c.193.193.134.35-.145.35h-2.01c-.273 0-.339-.156-.145-.35z'
          />
        </g>
      </g>
    </svg>
  )
}
