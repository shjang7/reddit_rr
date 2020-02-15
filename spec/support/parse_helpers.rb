module ParseHelpers
  def parsed_result
    lambda { |key| JSON.parse(response.body)[key] if key }
  end
end
