import type { Icon } from './types'

export const IconSignature: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='signature'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.742 8.721c.067 1.734-.982 5.126-1.51 6.372-.889-1.006-2.489-3.387-2.874-4.719-.481-1.665-1.396-5.9 1.026-6.505 2.423-.606 3.273 2.685 3.358 4.852Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.814 20.206c.693-1.1 1.659-2.885 2.476-4.835m0 0c.968-2.311 1.727-4.853 1.575-6.76-.337-4.213-2.025-4.868-3.038-4.815-1.013.053-2.94 1.447-1.598 6.323.688 2.496 1.857 4.223 3.06 5.252Zm0 0c1.13.966 2.293 1.317 3.115 1.112 1.578-.395 2.12-3.116 1.976-4.63m0 0a3.629 3.629 0 0 0-.044-.32s.013.12.044.32Zm0 0c.155.986.765 3.899 2.56 3.781 1.54-.1 1.606-2.266 1.184-3.911m0 0a6.671 6.671 0 0 0-.172-.567s.059.224.172.567Zm0 0c.383 1.156 1.387 3.661 2.866 3.487 1.918-.227 1.532-2.331 1.07-3.34M9.8 19.502 20 17.873'
      />
    </svg>
  )
}
