require 'test_helper'

class ReactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @react = reacts(:one)
  end

  test "should get index" do
    get reacts_url
    assert_response :success
  end

  test "should get new" do
    get new_react_url
    assert_response :success
  end

  test "should create react" do
    assert_difference('React.count') do
      post reacts_url, params: { react: {  } }
    end

    assert_redirected_to react_url(React.last)
  end

  test "should show react" do
    get react_url(@react)
    assert_response :success
  end

  test "should get edit" do
    get edit_react_url(@react)
    assert_response :success
  end

  test "should update react" do
    patch react_url(@react), params: { react: {  } }
    assert_redirected_to react_url(@react)
  end

  test "should destroy react" do
    assert_difference('React.count', -1) do
      delete react_url(@react)
    end

    assert_redirected_to reacts_url
  end
end
