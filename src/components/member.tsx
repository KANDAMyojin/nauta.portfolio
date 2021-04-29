import * as React from "react"
import { FC } from "react"
import { GraphCms_Member } from "../generated/graphql"
import { graphql, useStaticQuery } from "gatsby"

const Member: FC<{ member: GraphCms_Member }> = ({ member }) => {

  const data = useStaticQuery(graphql`
      query {
          github: imageSharp(resize: {originalName: {eq: "GitHub-Mark-120px-plus.png"}}) {
              resize {
                  originalName
                  src
              }
          }

          twitter: imageSharp(resize: {originalName: {eq: "Twitter social icons - square - blue.png"}}) {
              resize {
                  originalName
                  src
              }
          }

          github_gray: imageSharp(resize: {originalName: {eq: "GitHub-Mark-120px-plus.png"}}) {
              resize(grayscale: true) {
                  originalName
                  src
              }
          }

          twitter_gray: imageSharp(resize: {originalName: {eq: "Twitter social icons - square - blue.png"}}) {
              resize(grayscale: true) {
                  originalName
                  src
              }
          }
      }
  `)

  const gitHubImage = data.github.resize
  const twitterImage = data.twitter.resize
  const gitHubGrayImage = data.github_gray.resize
  const twitterGrayImage = data.twitter_gray.resize

  const GithubIcon: FC<{ githubAccount: GraphCms_Member["githubAccount"] }> = ({ githubAccount }) => {
    if (!!githubAccount) {
      return (
        <figure className="image is-32x32">
          <a href={`https://github.com/${member.githubAccount}`} target={`_blank`}>
            <img src={gitHubImage.src} />
          </a>
        </figure>
      )
    } else {
      return (
        <figure className="image is-32x32">
          <img src={gitHubGrayImage.src} />
        </figure>
      )
    }
  }

  const TwitterIcon: FC<{ twitterAccount: GraphCms_Member["twitterAccount"] }> = ({ twitterAccount }) => {
    if (!!twitterAccount) {
      return (
        <figure className="image is-32x32">
          <a href={`https://twitter.com/${member.twitterAccount}`} target={`_blank`}>
            <img src={twitterImage.src} />
          </a>
        </figure>
      )
    } else {
      return (
        <figure className="image is-32x32">
          <img src={twitterGrayImage.src} />
        </figure>
      )
    }
  }


  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={!!member.icon ? member.icon.url : `https://bulma.io/images/placeholders/96x96.png`}
                   alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title">{member.name}</p>
            <p className="subtitle">{member.technicalFields}</p>
          </div>

        </div>
      </div>

      <div className="content">
        {member.description}
      </div>

      <footer className="card-footer">
        <div className="card-footer-item">
          <GithubIcon githubAccount={member.githubAccount} />
        </div>
        <div className="card-footer-item">
          <TwitterIcon twitterAccount={member.twitterAccount} />
        </div>
        <a className="card-footer-item" href={`/member/${member.name}`}>Show More</a>
      </footer>
    </div>
  )
}

export default Member