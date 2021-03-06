import { SpringOption } from '../springSettings/types'

export type FlipId = string

export type ChildAsFunction = (props: object) => React.ReactNode

export type FlippedChildren = React.ReactNode | ChildAsFunction

export interface SerializableFlippedProps {
  children: FlippedChildren
  portalKey?: string
  opacity?: boolean
  translate?: boolean
  scale?: boolean
  transformOrigin?: string
  spring?: SpringOption
  stagger?: string | boolean
  flipId?: FlipId
  inverseFlipId?: string
}
export interface CallbackFlippedProps {
  onStart?: (
    element: HTMLElement,
    prevDecisionData: any,
    currentDecisionData: any
  ) => void
  onStartImmediate?: (
    element: HTMLElement,
    prevDecisionData: any,
    currentDecisionData: any
  ) => void
  onComplete?: (
    element: HTMLElement,
    prevDecisionData: any,
    currentDecisionData: any
  ) => void
  onSpringUpdate?: (springValue: number) => void
  onAppear?: (element: HTMLElement, index: number) => void
  onExit?: (
    element: HTMLElement,
    index: number,
    removeElement: () => void
  ) => void
  shouldFlip?: (prevDecisionData: any, currentDecisionData: any) => boolean
  shouldInvert?: (prevDecisionData: any, currentDecisionData: any) => boolean
}

export type FlippedProps = CallbackFlippedProps & SerializableFlippedProps
