export interface Whakatauki {
  id: number
  text: string
  translationEng: string
  explanation: string
  credit: string        //link
}

export interface Output extends Whakatauki {
  tags: string[]
}

export interface Tags {
  label: string
  whakatauki_id: number
}