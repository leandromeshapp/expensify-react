import React from "react"
import { shallow } from "enzyme"
import NotFoundPage from "../../components/NotFoundPage"


// Render Not Found Page Component
test("Should render NotFoundPage correctly", () => {
    const wrapper = shallow(<NotFoundPage />)

    expect(wrapper).toMatchSnapshot()
})
