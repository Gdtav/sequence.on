require "application_system_test_case"

class ReactsTest < ApplicationSystemTestCase
  setup do
    @react = reacts(:one)
  end

  test "visiting the index" do
    visit reacts_url
    assert_selector "h1", text: "Reacts"
  end

  test "creating a React" do
    visit reacts_url
    click_on "New React"

    click_on "Create React"

    assert_text "React was successfully created"
    click_on "Back"
  end

  test "updating a React" do
    visit reacts_url
    click_on "Edit", match: :first

    click_on "Update React"

    assert_text "React was successfully updated"
    click_on "Back"
  end

  test "destroying a React" do
    visit reacts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "React was successfully destroyed"
  end
end
