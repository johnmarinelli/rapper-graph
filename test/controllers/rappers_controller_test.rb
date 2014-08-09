require 'test_helper'

class RappersControllerTest < ActionController::TestCase
  setup do
    @rapper = rappers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rappers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rapper" do
    assert_difference('Rapper.count') do
      post :create, rapper: { beef: @rapper.beef, collaborated: @rapper.collaborated, influenced: @rapper.influenced, name: @rapper.name, year: @rapper.year }
    end

    assert_redirected_to rapper_path(assigns(:rapper))
  end

  test "should show rapper" do
    get :show, id: @rapper
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @rapper
    assert_response :success
  end

  test "should update rapper" do
    patch :update, id: @rapper, rapper: { beef: @rapper.beef, collaborated: @rapper.collaborated, influenced: @rapper.influenced, name: @rapper.name, year: @rapper.year }
    assert_redirected_to rapper_path(assigns(:rapper))
  end

  test "should destroy rapper" do
    assert_difference('Rapper.count', -1) do
      delete :destroy, id: @rapper
    end

    assert_redirected_to rappers_path
  end
end
