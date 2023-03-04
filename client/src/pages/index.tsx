import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { ImageUpload } from "../components/image-upload/ImageUpload"
import { NotesList } from "../components/notes-list/NotesList"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <ImageUpload />
      <NotesList />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
