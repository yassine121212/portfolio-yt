// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse,
} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import {
  PageInfo,
  Experience,
} from "../../typings";

const query = groq`
  *[_type == "experience"]
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] =
    await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
