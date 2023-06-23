This component is a form component adapted to nextJS.

It uses a few powerful features that next offers, such as redirection with the useRouter() hook and the Link component which is similar to the html anchor tag <a>.


The only difference is the usage of these imports in the Form.tsx file:

``
import Link from "next/link";
``

``
import { useRouter } from "next/navigation";
``
