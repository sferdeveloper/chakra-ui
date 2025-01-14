import { Text } from "@chakra-ui/react"
import { Button } from "compositions/ui/button"
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "compositions/ui/popover"

export const PopoverLazyMounted = () => {
  return (
    <PopoverRoot lazyMount unmountOnExit>
      <PopoverTrigger>
        <Button size="sm" variant="outline">
          Click me
        </Button>
      </PopoverTrigger>
      <PopoverContent showArrow>
        <PopoverBody>
          <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle>
          <Text my="4">
            Naruto is a Japanese manga series written and illustrated by Masashi
            Kishimoto.
          </Text>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}
